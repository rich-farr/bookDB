var dotenv = require('dotenv')
dotenv.load()
var bookKey = process.env.GOOGLE_BOOKS_KEY
var request = require('superagent')

var callApi = function(book) {

	var endPoint = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + book.isbn + '&key=' + bookKey

	var promise = new Promise(function(resolve, reject) {
		request.get(endPoint, function (error, response) {
			if (error) {
				reject("Server says NOPE")
			} else {
				var bookData = JSON.parse(response.text)
			if (bookData.totalItems === 0) {
				reject("Google says NOPE")
			} else {
					console.log("Google says YUP", bookData.items[0].volumeInfo.title)
					book.description = bookData.items[0].volumeInfo.description
					resolve(book)
				}
			}
		})
	})

	return promise
}

module.exports = callApi;



// {
//  "kind": "books#volumes",
//  "totalItems": 1,
//  "items": [
//   {
//    "kind": "books#volume",
//    "id": "rb6CQwAACAAJ",
//    "etag": "gxiFCgvI1jA",
//    "selfLink": "https://www.googleapis.com/books/v1/volumes/rb6CQwAACAAJ",
//    "volumeInfo": {
//     "title": "Man Alone",
//     "authors": [
//      "John Mulgan"
//     ],
//     "publisher": "Penguin Books",
//     "publishedDate": "2010",
//     "description": "'That's Auckland, mate - the Queen of the North.' 'The what?' 'The Queen of the North. That's what they call it - in Auckland. This is God's own, this country.' Man Alone is a literary landmark that has haunted our writing for decades. John Mulgan's vision of New Zealand society as detached and unsentimental, with the power to reject and alienate, enriches our understanding of who, and what, we are.",
//     "industryIdentifiers": [
//      {
//       "type": "ISBN_10",
//       "identifier": "0143204343"
//      },
//      {
//       "type": "ISBN_13",
//       "identifier": "9780143204343"
//      }
//     ],
//     "readingModes": {
//      "text": false,
//      "image": false
//     },
//     "pageCount": 205,
//     "printType": "BOOK",
//     "categories": [
//      "New Zealand fiction"
//     ],
//     "averageRating": 3.5,
//     "ratingsCount": 7,
//     "maturityRating": "NOT_MATURE",
//     "allowAnonLogging": false,
//     "contentVersion": "preview-1.0.0",
//     "imageLinks": {
//      "smallThumbnail": "http://books.google.co.nz/books/content?id=rb6CQwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//      "thumbnail": "http://books.google.co.nz/books/content?id=rb6CQwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//     },
//     "language": "en",
//     "previewLink": "http://books.google.co.nz/books?id=rb6CQwAACAAJ&dq=isbn:0143204343&hl=&cd=1&source=gbs_api",
//     "infoLink": "http://books.google.co.nz/books?id=rb6CQwAACAAJ&dq=isbn:0143204343&hl=&source=gbs_api",
//     "canonicalVolumeLink": "http://books.google.co.nz/books/about/Man_Alone.html?hl=&id=rb6CQwAACAAJ"
//    },
//    "saleInfo": {
//     "country": "NZ",
//     "saleability": "NOT_FOR_SALE",
//     "isEbook": false
//    },
//    "accessInfo": {
//     "country": "NZ",
//     "viewability": "NO_PAGES",
//     "embeddable": false,
//     "publicDomain": false,
//     "textToSpeechPermission": "ALLOWED",
//     "epub": {
//      "isAvailable": false
//     },
//     "pdf": {
//      "isAvailable": false
//     },
//     "webReaderLink": "http://books.google.co.nz/books/reader?id=rb6CQwAACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
//     "accessViewStatus": "NONE",
//     "quoteSharingAllowed": false
//    },
//    "searchInfo": {
//     "textSnippet": "&#39;That&#39;s Auckland, mate - the Queen of the North.&#39; &#39;The what?&#39; &#39;The Queen of the North. That&#39;s what they call it - in Auckland. This is God&#39;s own, this country.&#39; Man Aloneis a literary landmark that has haunted our writing for decades."
//    }
//   }
//  ]
// }
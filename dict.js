// https://www.youtube.com/watch?v=FSH77vnOGqU


data = {
    'a': [entry = { name: 'apple' }, entry = { name: 'apron' }],
  'c': [entry = { name: 'coefficient' }, entry = { name: 'Coefficient' }]
}

topics = [ {topic: 'topic 0', url: 'http://www.example.com'}, {topic: 'topic 1',url: 'http://www.example.com'}, {topic: 'topic 2', url: 'http://www.example.com'} ]

function searchTopics(searchTerm) {
  var index = searchTerm.toLowerCase().charAt()
  var prop = 'topic'
  
  var buff = []
  // We can use the adapter pattern to use different search strategies
  // TODO: JavaScript tokenization
  topics.forEach((cb, index) => {
    if (cb[prop] === searchTerm.toLowerCase()) {
      buff.push({data: cb[prop], index: index})
      // console.log({data: cb[prop], index: index})
    }
  })
 return buff
}

function search(searchTerm) {
  let searchTerm = 'topic 0'
  let prop = 'topic'
}


function searchTerms(searchTerm) {
  
  var index = searchTerm.toLowerCase().charAt()
  var prop = 'name'
  
  var buff = []

data[index].forEach((cb, index0) => {
    var lc = searchTerm.toLowerCase()
    if (lc == cb[prop].toLowerCase()) {
//         console.log(cb, index)
		buff.push(data[index][index0])
    }
})
 return buff
}

// searchTerms('coefficient')
searchTopics('topic 0')
// console.log(topics)
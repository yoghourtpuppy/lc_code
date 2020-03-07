const getJSON = (url) => {
  return new Promise((resolve)=>{
    const result = "result";
    resolve(result);
  }).then(JSON.parse);
}

getJSON('story.json').then(function(story) {
  addHtmlToPage(story.heading);

  return story.chapterUrls.reduce(function(sequence, chapterUrl) {
    // Once the last chapter's promise is done…
    return sequence.then(function() {
      // …fetch the next chapter
      return getJSON(chapterUrl);
    }).then(function(chapter) {
      // and add it to the page
      addHtmlToPage(chapter.html);
    });
  }, Promise.resolve());
}).then(function() {
  // And we're all done!
  addTextToPage("All done");
}).catch(function(err) {
  // Catch any error that happened along the way
  addTextToPage("Argh, broken: " + err.message);
}).then(function() {
  // Always hide the spinner
  document.querySelector('.spinner').style.display = 'none';
})

/**
 * Rewrite above methods in ES6
 */
fetchURLs = (urls) => {
  return urls.reduce((sequence, url) => {
    return sequence.then(getJSON).then(chapter => {
      addHtmlToPage(chapter.html);
    });
  }, Promise.resolve());
};

getJSON('story.json').then((story) => {
  addHtmlToPage(story.heading);

  return fetchURLs(story.chapterURLs);
})
.then(() => addTextToPage("All Done"))
.catch(err => addTextToPage(`Argh, broken: ${err.message}`))
.then(() => document.querySelector('.spinner').style.display = 'none');

/**
 * Call promise in parallel way
 */
getJSON('story.json').then(function(story) {
  addHtmlToPage(story.heading);

  // Take an array of promises and wait on them all
  return Promise.all(
    // Map our array of chapter urls to
    // an array of chapter json promises
    story.chapterUrls.map(getJSON)
  );
}).then(function(chapters) {
  // Now we have the chapters jsons in order! Loop through…
  chapters.forEach(function(chapter) {
    // …and add to the page
    addHtmlToPage(chapter.html);
  });
  addTextToPage("All done");
}).catch(function(err) {
  // catch any error that happened so far
  addTextToPage("Argh, broken: " + err.message);
}).then(function() {
  document.querySelector('.spinner').style.display = 'none';
});



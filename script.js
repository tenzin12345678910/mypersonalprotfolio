let myAlbum = {
  name: "MAP OF SOUL: PERSONA",
  price: "$22",
  rating: 4.8,
  summary: "BTS signals the beginning of a brand new story with the release of their newest EP MAP OF THE SOUL : PERSONA on April 12. As global superstars who play stadiums and are loved by countless fans across the world, bts now looks to shape the future reflecting on and using the power they have gained and embracing all its shadows. "
}

let infoDisplay = `
  <h1> Album Name: ${myAlbum["name"]} </h1>
  <p> Cost: ${myAlbum["price"]} </p>
  <p> Fan Rating: ${myAlbum["rating"]} out of 5 </p>
`

let summaryDisplay = `
<p> Official Summary: ${myAlbum["summary"]} </p>
`

$("#album-info").append(infoDisplay)
$("#album-summary").append(summaryDisplay)
// loveyourself Answer
let myAlbum2 = {
  name: "repackaged album LOVE YOURSELF 結‘ANSWER’",
  price: "$19",
  rating: 4.8,
  summary: "First unveiled in March of 2016, the BTS LOVE YOURSELF series creates a narrative by linking the key songs in each album into a single theme, imparting the message that “loving yourself is true love”. Like a well-written novel having introduction, development, twists, and conclusion it shared a compelling story for two and a half years."
}

let infoDisplay2 = `
  <h1> Album Name: ${myAlbum2["name"]} </h1>
  <p> Cost: ${myAlbum2["price"]} </p>
  <p> Fan Rating: ${myAlbum2["rating"]} out of 20 </p>
`

let summaryDisplay2 = `
<p> Official Summary: ${myAlbum2["summary"]} </p>
`
$("#album-info2").append(infoDisplay2)
$("#album-summary2").append(summaryDisplay2)
//number3
let myAlbum3 = {
  name: "LOVE YOURSELF 結‘TEAR’",
  price: "$19",
  rating: 4.7,
  summary: ""
}

let infoDisplay3 = `
  <h1> Album Name: ${myAlbum3["name"]} </h1>
  <p> Cost: ${myAlbum3["price"]} </p>
  <p> Fan Rating: ${myAlbum3["rating"]} out of 20 </p>
`

let summaryDisplay3 = `
<p> Official Summary: ${myAlbum3["summary"]} </p>
`
$("#album-info2").append(infoDisplay3)
$("#album-summary2").append(summaryDisplay3)

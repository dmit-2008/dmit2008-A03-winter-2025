const SIMPSON_CHARACTERS = [
	"Homer Simpson",
	"Bart Simpson",
	"Marge Simpson",
	"Mr. Burns",
	"Lisa Simpson",
	"Apu Nahasapeemapetilon",
	"Sideshow Bob",
	"Milhouse Van Houten",
	"Ned Flanders",
]
// I want you to use this in the index.js and I want you to
// loop through the list and show each item
// with a specific key on the list item.
export default function SimpsonsCharacters() {
  return <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    {/* This is the important part */}
    {SIMPSON_CHARACTERS.map((character, index)=> {
      // return the JSX
      // the key needs to be unique among siblings
      return <li key={index}>{character}</li>
    })}
  </ol>
}
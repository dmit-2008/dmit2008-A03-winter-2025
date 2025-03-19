import ReviewCard from "./ReviewCard"
// a note passing down loadReviews, we'll learn
// a better way to do this with the context api.
// so that we can have a provider and not pass
// something as a prop (or prop drill)
export default function ReviewsList({
  reviews,
  // if were rendering with option 2 you'll need
  loadReviews, // from the index.js
  // if were rendering with option 1 you'll need
  // setReviews, reviews // the stateful values
  // passing state down.
}) {

  // a little reminder in react you return
  // a single jsx node, sometimes you don't want
  // to render a new html element a fragment is
  // a node that doesn't render an html element.
  // below we use it with <> </>
  return <>
    {reviews.map((adaptation)=> {
      // replacing the card with
      // our new component.
      return <ReviewCard
        key={adaptation.id}
        id={adaptation.id}
        comment={adaptation.comment}
        title={adaptation.title}
        rating={adaptation.rating}
        loadReviews={loadReviews}
      />

      // another way to write the above.
      // is to spread the object of adaptation
      // into the review card.
      // return <ReviewCard
      //   key={adaptation.id}
      //   {...adaptation}
      //   loadReviews={loadReviews}
      // />
    })}
  </>


}
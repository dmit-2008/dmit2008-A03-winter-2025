// I want you to create this.

export default function ReviewCard() {

  return <Card
    sx={{marginTop: 4}}
    key={index}
  >

    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
          {adaptation.rating}
        </Avatar>
      }

      action={
        <IconButton
          onClick={() => {
            // this function we use the
            // id from the reivews in the
            // map above.
            removeReview(adaptation.id)
          }}
        >
          <DeleteIcon />
        </IconButton>
      }

      title={
        <Typography variant="body2" color="text.secondary">
          {adaptation.title}
        </Typography>
      }

    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {adaptation.comment}
      </Typography>
    </CardContent>
  </Card>
}
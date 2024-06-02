import { Event } from "../../data/Event";
import CustomCard from "../CustomCard/CustomCard";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <>
      <CustomCard>
        <Card
          sx={{
            display: "flex",
            height: "200px",
            boxShadow: "none",
            padding: 0,
          }}
        >
          <CardMedia
            component="img"
            image={event.image}
            alt="Placeholder Image"
            sx={{
              width: "50%",
              objectFit: "cover",
              objectPosition: "center",
              flexShrink: 0
            }}
          />
          <CardContent sx={{overflow: "auto", scrollbarWidth: "none"}}>
            <Typography gutterBottom variant="h5" component="div">
              {event.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {event.date}
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              {event.description}
            </Typography>
          </CardContent>
        </Card>
      </CustomCard>
    </>
  );
};

export default EventCard;

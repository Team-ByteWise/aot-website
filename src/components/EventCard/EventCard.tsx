import { useEffect, useState } from "react";
import { Event } from "../../data/Event";
import CustomCard from "../CustomCard/CustomCard";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    // Handle image loading error if needed
    setImageLoaded(false);
  };

  useEffect(() => {
    // Fix: React reusing component and displaying previously rendered event's image
    setImageLoaded(false);
  }, [event]);

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
              width: imageLoaded ? "50%" : "0",
              objectFit: "cover",
              objectPosition: "center",
              flexShrink: 0,
            }}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          <CardContent sx={{ overflow: "auto", scrollbarWidth: "none" }}>
            <Typography gutterBottom variant="h5" component="div">
              {event.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {event.date}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                textAlign: "left",
              }}
            >
              {event.description}
            </Typography>
          </CardContent>
        </Card>
      </CustomCard>
    </>
  );
};

export default EventCard;

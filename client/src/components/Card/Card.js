import React from "react";
import PropTypes from "prop-types";
import {
  Card as MuCard,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: (props) => ({
    width: 345,
    height: 312,
    margin: props.margin,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#022f4db7",
    backgroundColor: props.bgColor,
    color: props.color,
    fontSize: props.fontSize,
    wordBreak: "break-all",
    overflow: "hidden",
    "&:hover": {
      boxShadow: "2px 1px 11px #252525b7",
    },
  }),
  actionArea: {
    height: "inherit",
  },
  media: {
    height: 180,
  },
});

export default function Card(props) {
  const classes = useStyles(props);

  const { img, name, price, description, onClick, onDrag, onBlur } = props;

  return (
    <MuCard className={classes.card} onDrag={onDrag} onBlur={onBlur}>
      <CardActionArea className={classes.actionArea} onClick={onClick}>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="8px"
          >
            <Typography component="h2" variant="h5">
              {name}
            </Typography>
            {price ? <Typography component="p">${price}</Typography> : null}
          </Box>
          <Typography
            className={classes.description}
            component="p"
            variant="body2"
            color="textSecondary"
          >
            {description.trim().length > 135
              ? description.trim().slice(0, 135) + "..."
              : description.trim()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuCard>
  );
}

Card.defaultProps = {
  name: "name",
  price: 0,
  description: "",
  img: "/",
  color: "#000",
  margin: 18,
};

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  img: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  onDrag: PropTypes.func,
  onBlur: PropTypes.func,
};

import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";


export default function NewReview () {
  const [isNewRestaurantSelected, setIsNewRestaurantSelected] = useState<boolean>(false);

  return (
    <div className="newReviewContainer">
      <div className="inputContainer">
        <div className="restaurantInput">
          <h1>Selecciona el restaurant:</h1>
          <div className="inputSurface">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={[
                { label: 'La balmesina'},
                { label: 'La balmesina'},
                { label: 'La mama italia'}
              ]}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
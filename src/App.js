import { useDispatch, useSelector } from "react-redux";
import { fetchPhotosAction } from "./store/photosReducer";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  return (
    <div className='App'>
      <button onClick={() => dispatch(fetchPhotosAction())}>Get photos</button>
      <div>{JSON.stringify(photos, null, 2)}</div>
    </div>
  );
}

export default App;

import { useParams } from "react-router-dom";

export default function CharacterPage() {
  return (
    <>
      <h1>character page</h1>
      <br />
      {JSON.stringify(useParams())}
    </>
  );
}

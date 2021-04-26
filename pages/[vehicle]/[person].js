import { useRouter } from "next/router";
const person = () => {
  const router = useRouter();
  const { vehicle, person } = router.query;
  return (
    <div>
      <h1>
        it is <b>{person}'s</b> {vehicle}
      </h1>
    </div>
  );
};

export default person;

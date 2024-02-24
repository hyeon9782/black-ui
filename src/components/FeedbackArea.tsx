import { container, overlayContainer } from "@/app.css";

import Skeleton from "./Feedback/Skeleton/Skeleton";
import { Button } from "./Form";
import { Spinner } from "./Feedback/Spinner";
import Progress from "./Feedback/Progress/Progress";
import { useToast } from "./Feedback/Toast";

const FeedbackArea = () => {
  const { openToast } = useToast();
  return (
    <div className={overlayContainer}>
      <fieldset className={container}>
        <legend>Progress</legend>

        <Progress value={30} />
      </fieldset>
      <fieldset className={container}>
        <legend>Skeleton</legend>
        <Skeleton
          width="100%"
          height="200px"
          radius="15px"
          background="lightgray"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "20px",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Skeleton
              width="150px"
              height="150px"
              radius="15px"
              background="gray"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginLeft: "30px",
                width: "80%",
              }}
            >
              <Skeleton
                width="100%"
                height="20px"
                radius="5px"
                background="gray"
              />
              <Skeleton
                width="100%"
                height="20px"
                radius="5px"
                background="gray"
              />
              <Skeleton
                width="100%"
                height="20px"
                radius="5px"
                background="gray"
              />
              <Skeleton
                width="100%"
                height="20px"
                radius="5px"
                background="gray"
              />
              <Skeleton
                width="100%"
                height="20px"
                radius="5px"
                background="gray"
              />
            </div>
          </div>
        </Skeleton>
      </fieldset>
      <fieldset className={container}>
        <legend>Toast</legend>
        <Button
          onClick={() =>
            openToast({
              title: "Scheduled: Catch up ",
              description: "Friday, February 10, 2023 at 5:57 PM",
              status: "info",
              position: "topRight",
            })
          }
        >
          Toast 나와라!
        </Button>
      </fieldset>
      <fieldset className={container}>
        <legend>Spinner</legend>
        <Spinner />
      </fieldset>
    </div>
  );
};

export default FeedbackArea;

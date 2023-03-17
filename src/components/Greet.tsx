type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <>
      {props.isLoggedIn ? (
        <div>
          Welcome {props.name}! You have {props.messageCount} unread messages.
        </div>
      ) : (
        "Welcome Guest! "
      )}
    </>
  );
};

export default Greet;

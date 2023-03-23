type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props; // if message is passed use its value if not use 0 as a value
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

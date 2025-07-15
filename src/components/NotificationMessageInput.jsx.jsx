// Set the value to the default notification message
export const NotificationMessageInput = () => {
  return (
    <div>
      <label htmlFor="notificationMessageInput">Notification Message</label>
      <input
        type="text"
        id="notificationMessageInput"
        placeholder="Message"
        className="input focus:outline-0"
      />
    </div>
  );
};

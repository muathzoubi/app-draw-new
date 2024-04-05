const Popover = ({ children, show }: any) => {
  return show ? (
    <div className="popover">
      <div className="popcard">
        <div className="popcard2">{children}</div>
      </div>
    </div>
  ) : null;
};
export default Popover;

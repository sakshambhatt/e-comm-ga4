export const FetchStatus = (value) => {
  const { fetchStatus } = value.value;
  return (
    <div className="center">
      {fetchStatus === "loading" && <small>loading...</small>}
      {fetchStatus === "error" && <small>error from server...</small>}
    </div>
  );
};

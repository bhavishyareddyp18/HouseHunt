function OnlineBadge({

  online

}) {

  return (

    <span

      className={`
      badge
      bg-${
        online
        ? "success"
        : "secondary"
      }
      `}

    >

      {
        online
        ? "Online"
        : "Offline"
      }

    </span>

  );
}

export default OnlineBadge;
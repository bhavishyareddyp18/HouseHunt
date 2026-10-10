function SmartScoreBadge({ score }) {

  let color = "secondary";

  if (score > 70)
    color = "success";

  if (score > 40 && score <= 70)
    color = "warning";

  if (score <= 40)
    color = "danger";

  return (
    <span className={`badge bg-${color}`}>
      Match: {score}%
    </span>
  );

}

export default SmartScoreBadge;
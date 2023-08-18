function healthStatus({ health }) {
  let status;
  if (health > 50) {
    status = 'healthy';
  } else if (health <= 50 && health >= 15) {
    status = 'wounded';
  } else if (health < 15 && health > 0) {
    status = 'critical';
  }
  return status;
}

export default healthStatus;

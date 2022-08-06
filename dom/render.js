export const render = (() => {
  const renderShip = (zones) => {
    for (let i = 0; i < zones.length; i++) {
      const zone = document.getElementById(zones[i]);
      zone.classList.add('ship');
    }
  };
  const renderHit = (zone) => {
    zone = document.getElementById(zone);
    zone.classList.add('hit');
  };
  const renderMiss = (zone) => {
    zone = document.getElementById(zone);
    zone.classList.add('miss');
  };
  return { renderShip, renderHit, renderMiss };
})();

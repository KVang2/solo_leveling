// Xp
import React from 'react';
import { createContext, useState, useEffect } from 'react';

export const XPContext = createContext();

export function XPProvider({ children }) {
    const [xp, setXp] = useState(0);
    const [level, setLevel] = useState(1);
    const [nextLevelXp, setNextLevelXp] = useState(100);
    const [xpForPreviousLevels, setXpForPreviousLevels] = useState(0);

    const [bonusPoints, setBonusPoints] = useState(0);
    const [allocatedPoints, setAllocatedPoints] = useState({});
    const [baseStats, setBaseStats] = useState({
    health: 100,
    attack: 5,
    defense: 3,
    speed: 4,
    agility: 3,
    intelligence: 2,
    strength: 6,
    stamina: 25,
    mana: 50,
  });

  // Calculate progress within current level
  const currentLevelXp = Math.max(0, xp - xpForPreviousLevels);
  const progress = (currentLevelXp / nextLevelXp) * 100;

  useEffect(() => {
    const checkLevelUp = () => {
      let newLevel = level;
      let xpPrev = xpForPreviousLevels;
      let xpNeeded = nextLevelXp;
      let statIncreases = { ...baseStats };
      let bonus = bonusPoints;

      while (xp - xpPrev >= xpNeeded) {
        xpPrev += xpNeeded;
        newLevel++;
        xpNeeded = newLevel * 100;
        bonus += 5;

        for (let key in statIncreases) {
          statIncreases[key] += 5;
        }
      }

      if (newLevel !== level) {
        setLevel(newLevel);
        setXpForPreviousLevels(xpPrev);
        setNextLevelXp(xpNeeded);
        setBaseStats(statIncreases);
        setBonusPoints(bonus);
      }
    };

    checkLevelUp();
  }, [xp]);

  const resetBonusPoints = () => {
    const refunded = Object.values(allocatedPoints).reduce((a, b) => a + b, 0);
    setBonusPoints(prev => prev + refunded);
    setAllocatedPoints({});
  };

  return (
    <XPContext.Provider
      value={{
        xp,
        setXp,
        level,
        nextLevelXp,
        xpForPreviousLevels,
        currentLevelXp,
        progress,
        bonusPoints,
        setBonusPoints,
        baseStats,
        setBaseStats,
        allocatedPoints,
        setAllocatedPoints,
        resetBonusPoints,
      }}
    >
      {children}
    </XPContext.Provider>
  );
}
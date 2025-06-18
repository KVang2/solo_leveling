// Xp
import React from 'react';
import { createContext, useState, useEffect } from 'react';

export const XPContext = createContext();

export function XPProvider({ children }) {
    const [xp, setXp] = useState(0);
    const [level, setLevel] = useState(1);
    const [nextLevelXp, setNextLevelXp] = useState(100);
    const [bonusPoints, setBonusPoints] = useState(0);
    const [allocatedPoints, setAllocatedPoints] = useState({});

    const progress = ((xp % 100) / 100) * 100;
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

  // Auto-level-up watcher
  useEffect(() => {
    while (xp >= nextLevelXp) {
      const newLevel = level + 1;
      const newXpThreshold = newLevel * 100;

      setLevel(newLevel);
      setNextLevelXp(newXpThreshold);

      // Stat increases per level
      setBaseStats(prevStats => {
        const updatedStats = {};
        for (let key in prevStats) {
          updatedStats[key] = prevStats[key] + 5;
        }
        return updatedStats;
      });

      // Add manual distribution points
      setBonusPoints(prev => prev + 5);
    }
  }, [xp]);

  const resetBonusPoints = () => {
    setBonusPoints(prev => prev + Object.values(allocatedPoints).reduce((a, b) => a + b, 0));
    setAllocatedPoints({});
  };

  return (
    <XPContext.Provider
      value={{
        xp,
        setXp,
        level,
        nextLevelXp,
        bonusPoints,
        setBonusPoints,
        baseStats,
        setBaseStats,
        allocatedPoints,
        setAllocatedPoints,
        resetBonusPoints,
        progress,
      }}
    >
      {children}
    </XPContext.Provider>
  );
}
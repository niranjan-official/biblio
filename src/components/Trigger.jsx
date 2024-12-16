import React, { useEffect, useRef } from "react";
import { getDatabase, ref, onValue, off } from "firebase/database";
import { db } from "../firebase/config";

const Trigger = ({setTrigger}) => {
  const isInitialLoad = useRef(true);
  const previousValue = useRef(null);

  useEffect(() => {
    const starCountRef = ref(db, "/trigger");
    
    const listener = onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      if (isInitialLoad.current) {
        isInitialLoad.current = false;
        previousValue.current = data;
      } else if (data !== previousValue.current) {
        console.log("Value changed", data);
        setTrigger(true);
      }
    });

    return () => {
      off(starCountRef, 'value', listener);
    };
  }, []);

  return null;
};

export default Trigger;
import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useColorsStore = defineStore('colorsStore', () => {
 let mathSubject = ref(false);
 let historySubject = ref(false);
 let chemistrySubject = ref(false);

  
   const changeColorSubject = subject => {
     console.log(mathSubject, historySubject, chemistrySubject)
     if (subject === "Math")
     return (
       (mathSubject = true),
       (historySubject = false),
       (chemistrySubject = false)
       );
       if (subject === "History")
       return (
         (historySubject = true),
         (chemistrySubject = false),
         (mathSubject = false)
         );
         if (subject === "Chemistry")
         return (
           (chemistrySubject = true),
           (historySubject = false),
           (mathSubject = false)
           );
           
};

  return { mathSubject, historySubject, chemistrySubject, changeColorSubject  }
})

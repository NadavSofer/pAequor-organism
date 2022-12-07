// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum,
      dna,
      mutate() {
        let toCheck = this.dna[Math.floor(Math.random() * this.dna.length)];
        let checkIndex = this.dna.indexOf(toCheck);
        let randomLetter = returnRandBase();
        let output = [];
        if (randomLetter === this.dna[0]) {
          randomLetter = returnRandBase();
        }
        if (checkIndex === 0) {
            output = this.dna.slice();
            if (toCheck !== randomLetter) {
              output[0] = returnRandBase();
            }
        }
        return output;
      },
      compareDNA(pAequor) {
        let alike = [];
        let pAequorList = pAequor.dna
        for (i = 0; i < pAequorList.length; i++) {
          if (this.dna[i] === pAequorList[i]) {
            alike.push(this.dna[i])
          }
        }
        const compared = alike.length / this.dna.length * 100;
        console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${compared.toFixed(0)}% DNA in common`);
      },
      willLikelySurvive() {
        let checkIfSurvived = [];
        
        for (i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'C' || this.dna[i] === 'G') {
            checkIfSurvived.push(this.dna[i])
          }
          


        }
        let percentage = checkIfSurvived.length / this.dna.length * 100;
        if (percentage.toFixed(0) >= 60) {
          return true;
          } else {
            return false;
          }
      }
    };
  };
  
  const test = pAequorFactory(1, mockUpStrand());
  const test2 = pAequorFactory(2, mockUpStrand());
  console.log(test.willLikelySurvive());

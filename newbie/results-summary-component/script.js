fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const reactionResults = document.getElementById(
      "results-component__summary-reaction"
    );
    const memoryResults = document.getElementById(
      "results-component__summary-memory"
    );
    const verbalResults = document.getElementById(
      "results-component__summary-verbal"
    );
    const visualResults = document.getElementById(
      "results-component__summary-visual"
    );

    // Reaction
    // Reaction Image
    const reactionIMG = document.createElement("img");
    reactionIMG.src = data[0].icon;
    reactionIMG.setAttribute("alt", "reaction icon");
    reactionResults.appendChild(reactionIMG);

    // Reaction Category
    const reactionCategory = document.createElement("p");
    reactionCategory.innerHTML = data[0].category;
    reactionResults.appendChild(reactionCategory);

    // Reaction Score
    const reactionScore = document.createElement("p");
    reactionScore.innerHTML = data[0].score;
    reactionResults.appendChild(reactionScore);

    // Reaction 100
    const reaction100 = document.createElement("span");
    reaction100.innerHTML = "/ 100";
    reaction100.className = "results100";
    reactionResults.appendChild(reaction100);

    // Memory
    // Memory Image
    const memoryIMG = document.createElement("img");
    memoryIMG.src = data[1].icon;
    memoryIMG.setAttribute("alt", "reaction icon");
    memoryResults.appendChild(memoryIMG);
    // Memory Category
    const memoryCategory = document.createElement("p");
    memoryCategory.innerHTML = data[1].category;
    memoryResults.appendChild(memoryCategory);
    // Memory Score
    const memoryScore = document.createElement("p");
    memoryScore.innerHTML = data[1].score;
    memoryResults.appendChild(memoryScore);

    // Memory 100
    const memory100 = document.createElement("span");
    memory100.innerHTML = "/ 100";
    memory100.className = "results100";
    memoryResults.appendChild(memory100);

    // Verbal
    // Verbal Image
    const verbalIMG = document.createElement("img");
    verbalIMG.src = data[2].icon;
    verbalIMG.setAttribute("alt", "reaction icon");
    verbalResults.appendChild(verbalIMG);
    // Verbal Category
    const verbalCategory = document.createElement("p");
    verbalCategory.innerHTML = data[2].category;
    verbalResults.appendChild(verbalCategory);
    // Verbal Score
    const verbalScore = document.createElement("p");
    verbalScore.innerHTML = data[2].score;
    verbalResults.appendChild(verbalScore);

    // verbal 100
    const verbal100 = document.createElement("span");
    verbal100.innerHTML = "/ 100";
    verbal100.className = "results100";
    verbalResults.appendChild(verbal100);

    // Visual
    // Visual Image
    const visualIMG = document.createElement("img");
    visualIMG.src = data[3].icon;
    visualIMG.setAttribute("alt", "reaction icon");
    visualResults.appendChild(visualIMG);
    // Visual Category
    const visualCategory = document.createElement("p");
    visualCategory.innerHTML = data[3].category;
    visualResults.appendChild(visualCategory);
    // Visual Score
    const visualScore = document.createElement("p");
    visualScore.innerHTML = data[3].score;
    visualResults.appendChild(visualScore);

    // Visual 100
    const visual100 = document.createElement("span");
    visual100.innerHTML = "/ 100";
    visual100.className = "results100";
    visualResults.appendChild(visual100);
  });

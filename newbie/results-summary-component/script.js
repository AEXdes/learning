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

    //
    // Reaction
    const reactionLabelDiv = document.createElement("div");
    reactionResults.appendChild(reactionLabelDiv);
    reactionLabelDiv.className = "results-component__summary__label";

    const reactionScoreDiv = document.createElement("div");
    reactionResults.appendChild(reactionScoreDiv);
    reactionScoreDiv.className = "results-component__summary__score";

    // Reaction Image
    const reactionIMG = document.createElement("img");
    reactionIMG.src = data[0].icon;
    reactionIMG.setAttribute("alt", "reaction icon");
    reactionLabelDiv.appendChild(reactionIMG);

    // Reaction Category
    const reactionCategory = document.createElement("p");
    reactionCategory.innerHTML = data[0].category;
    reactionLabelDiv.appendChild(reactionCategory);
    reactionCategory.className = "results-component__summary__label-name";

    // Reaction Score
    const reactionScore = document.createElement("p");
    reactionScore.innerHTML = data[0].score;
    reactionScoreDiv.appendChild(reactionScore);

    // Reaction 100
    const reaction100 = document.createElement("span");
    reaction100.innerHTML = "/ 100";
    reaction100.className = "results100";
    reactionScoreDiv.appendChild(reaction100);

    //
    // Memory
    const memoryLabelDiv = document.createElement("div");
    memoryResults.appendChild(memoryLabelDiv);
    memoryLabelDiv.className = "results-component__summary__label";

    const memoryScoreDiv = document.createElement("div");
    memoryResults.appendChild(memoryScoreDiv);
    memoryScoreDiv.className = "results-component__summary__score";

    // Memory Image
    const memoryIMG = document.createElement("img");
    memoryIMG.src = data[1].icon;
    memoryIMG.setAttribute("alt", "memory icon");
    memoryLabelDiv.appendChild(memoryIMG);
    // Memory Category
    const memoryCategory = document.createElement("p");
    memoryCategory.innerHTML = data[1].category;
    memoryLabelDiv.appendChild(memoryCategory);
    memoryCategory.className = "results-component__summary__label-name";
    // Memory Score
    const memoryScore = document.createElement("p");
    memoryScore.innerHTML = data[1].score;
    memoryScoreDiv.appendChild(memoryScore);

    // Memory 100
    const memory100 = document.createElement("span");
    memory100.innerHTML = "/ 100";
    memory100.className = "results100";
    memoryScoreDiv.appendChild(memory100);

    //
    // Verbal
    const verbalLabelDiv = document.createElement("div");
    verbalResults.appendChild(verbalLabelDiv);
    verbalLabelDiv.className = "results-component__summary__label";

    const verbalScoreDiv = document.createElement("div");
    verbalResults.appendChild(verbalScoreDiv);
    verbalScoreDiv.className = "results-component__summary__score";

    // Verbal Image
    const verbalIMG = document.createElement("img");
    verbalIMG.src = data[2].icon;
    verbalIMG.setAttribute("alt", "verbal icon");
    verbalLabelDiv.appendChild(verbalIMG);
    // Verbal Category
    const verbalCategory = document.createElement("p");
    verbalCategory.innerHTML = data[2].category;
    verbalLabelDiv.appendChild(verbalCategory);
    verbalCategory.className = "results-component__summary__label-name";
    // Verbal Score
    const verbalScore = document.createElement("p");
    verbalScore.innerHTML = data[2].score;
    verbalScoreDiv.appendChild(verbalScore);

    // verbal 100
    const verbal100 = document.createElement("span");
    verbal100.innerHTML = "/ 100";
    verbal100.className = "results100";
    verbalScoreDiv.appendChild(verbal100);

    //
    // Visual
    const visualLabelDiv = document.createElement("div");
    visualResults.appendChild(visualLabelDiv);
    visualLabelDiv.className = "results-component__summary__label";

    const visualScoreDiv = document.createElement("div");
    visualResults.appendChild(visualScoreDiv);
    visualScoreDiv.className = "results-component__summary__score";

    // Visual Image
    const visualIMG = document.createElement("img");
    visualIMG.src = data[3].icon;
    visualIMG.setAttribute("alt", "visual icon");
    visualLabelDiv.appendChild(visualIMG);
    // Visual Category
    const visualCategory = document.createElement("p");
    visualCategory.innerHTML = data[3].category;
    visualLabelDiv.appendChild(visualCategory);
    visualCategory.className = "results-component__summary__label-name";
    // Visual Score
    const visualScore = document.createElement("p");
    visualScore.innerHTML = data[3].score;
    visualScoreDiv.appendChild(visualScore);

    // Visual 100
    const visual100 = document.createElement("span");
    visual100.innerHTML = "/ 100";
    visual100.className = "results100";
    visualScoreDiv.appendChild(visual100);
  });

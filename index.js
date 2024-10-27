const max_branch = prompt("Enter the height of the Christmas tree (e.g., 15):");

const treeFoot = () => {
    let result = '';
    if (max_branch > 4) {
        for (let f = 0; f < max_branch - (max_branch > 5 ? 5 : max_branch > 10 ? 7 : max_branch); f++) {
            result += ' ';
        }
        result += '____|__|____';
    }
    return result;
};

const displayTree = () => {
    let treeOutput = '';
    for (let i = 0; i < max_branch; i++) {
        let result = '';
        let spaces = '';
        let extra = i > 0 ? i : 0;

        for (let k = 0; k < (max_branch - i); k++) {
            spaces += '&nbsp;';
        }

        for (let j = 0; j < ((i + 1) + extra); j++) {
            const color = (j % 2 === 0) ? '#ed0c0c' : '#63E6BE'; // Red for even, green for odd
            result += `<i class="fa-solid fa-star" style="color: ${color};"></i>`; // Font Awesome star
        }

        result = spaces + result;
        treeOutput += result + '<br>'; 
    }

    treeOutput += treeFoot().replace(/_/g, '<span class="foot">_</span>');

    const treeDiv = document.createElement('div');
    treeDiv.className = 'tree';
    treeDiv.innerHTML = treeOutput; 
    document.body.appendChild(treeDiv);
};

displayTree();

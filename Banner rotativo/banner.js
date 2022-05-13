let time = 8000,
    currentpIndex = 0,
    p = document
                .querySelectorAll("#slider p")
    max = p.length;

    function nextp() {

        p[currentpIndex]
            .classList.remove("selected")
    
        currentpIndex++
    
        if(currentpIndex >= max)
            currentpIndex = 0
    
        p[currentpIndex]
            .classList.add("selected")
    }

function start() {
    setInterval(() => {
        // troca de image
        nextp()
    }, time)
}

window.addEventListener("load", start)

let time2 = 8000,
    currentp2Index = 0,
    p2 = document
                .querySelectorAll(".novo p")
    max = p2.length;

    function nextp2() {

        p2[currentp2Index]
            .classList.remove("selected1")
    
        currentp2Index++
    
        if(currentp2Index >= max)
            currentp2Index = 0
    
        p2[currentp2Index]
            .classList.add("selected1")
    }

function start2() {
    setInterval(() => {
        // troca de image
        nextp2()
    }, time)
}

window.addEventListener("load", start2)
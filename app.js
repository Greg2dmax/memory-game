document.addEventListener('DOMContentLoaded', () => {


            //card options
            const cardArray = [{
                    name: 'luffy',
                    img: 'images/luffy.jpg'
                },
                {
                    name: 'luffy',
                    img: 'images/luffy.jpg'
                },
                {
                    name: 'zoro',
                    img: 'images/zoro.jpg'
                },
                {
                    name: 'zoro',
                    img: 'images/zoro.jpg'
                },
                {
                    name: 'nami',
                    img: 'images/nami.jpg'
                },
                {
                    name: 'nami',
                    img: 'images/nami.jpg'
                },
                {
                    name: 'usopp',
                    img: 'images/usopp.jpg'
                },
                {
                    name: 'usopp',
                    img: 'images/usopp.jpg'
                },
                {
                    name: 'chopper',
                    img: 'images/chopper.jpg'
                },
                {
                    name: 'chopper',
                    img: 'images/chopper.jpg'
                },
                {
                    name: 'brook',
                    img: 'images/brook.jpg'
                },
                {
                    name: 'brook',
                    img: 'images/brook.jpg'
                }
            ]

            cardArray.sort(() => 0.5 - Math.random())

            const grid = document.querySelector('.grid')
            const resultDisplay = document.querySelector('#result')
            var cardsChosen = []
            var cardsChosenId = []
            var cardsWon = []

            //creating the board

            function createBoard() {
                for (let i = 0; i < cardArray.length; i++) {
                    var card = document.createElement('img')
                    card.setAttribute('src', 'images/background.jpg')
                    card.setAttribute('data-id', i)
                    card.addEventListener('click', flipCard)
                    grid.appendChild(card)
                }
            }

            //check for matches
            function checkForMatch() {
                var cards = document.querySelectorAll('img')
                const optionOneId = cardsChosenId[0]
                const optionTwoId = cardsChosenId[1]
                if (cardsChosen[0] === cardsChosen[1]) {
                    alert('ayyy You found a match')
                    cards[optionOneId].setAttribute('src', 'images/white.jpg')
                    cards[optionTwoId].setAttribute('src', 'images/white.jpg')
                    cardsWon.push(cardsChosen)
                } else {
                    cards[optionOneId].setAttribute('src', 'images/background.jpg')
                    cards[optionTwoId].setAttribute('src', 'images/background.jpg')
                    alert('Sorry, try again')
                }
                cardsChosen = []
                cardsChosenId = []
                    resultDisplay.textContent = cardsWon.length
                     if (cardsWon.length === cardArray.length/2) {
                        resultDisplay.textContent =  'Congratz! You found them all!'
                     
                    }
                }

                //flipping the cards
                function flipCard() {
                    var cardId = this.getAttribute('data-id')
                    cardsChosen.push(cardArray[cardId].name)
                    cardsChosenId.push(cardId)
                    this.setAttribute('src', cardArray[cardId].img)
                    if (cardsChosen.length === 2) {
                        setTimeout(checkForMatch, 1000)
                    }
                }

                createBoard()
            
            })
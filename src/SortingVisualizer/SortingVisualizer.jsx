import React from 'react';
import './SortingVisualizer.css'
import { getBubbleSortAnimations, getInsertionSortAnimations, getMergeSortAnimations, getQuickSortAnimations, getSelectionSortAnimations } from '../SortingAlgorithms/sortingAlgorithm'

//window.screen.width / 3 - 250
const NUMBER_OF_ARRAY_BARS = 100;
const ANIMATION_SPEED_MS = 20;
const PRIMARY_COLOR = '#8ab6d6';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({ array });
    }
    //merge Sort
    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? PRIMARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    //bubble Sort
    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            var properties = animations[i];
            const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = properties;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.height = `${barTwoHeight}px`;
                barTwoStyle.height = `${barOneHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
    }
    //quick Sort
    quickSort() {
        const animations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            var properties = animations[i];
            const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = properties;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.height = `${barTwoHeight}px`;
                barTwoStyle.height = `${barOneHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
    }
    //selection Sort
    selectionSort() {
        const animations = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            var properties = animations[i];
            const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = properties;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.height = `${barTwoHeight}px`;
                barTwoStyle.height = `${barOneHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
    }
    //insertion Sort
    insertionSort() {
        const animations = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            var properties = animations[i];
            const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = properties;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.height = `${barTwoHeight}px`;
                barTwoStyle.height = `${barOneHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
    }


    render() {
        const { array } = this.state;
        return (

            < body >

                <nav>
                    <ul>
                        <li><a href="#visualizer">Sorting Visualizer <i class="fas fa-signal"></i></a></li>
                        <li className="lil"><a href="mailto:asmohitt@gmail.com" class="fa fa-google"> </a></li>
                        <li className="lil"><a href="https://www.linkedin.com/in/moh1tt" class="fa fa-linkedin"> </a></li>
                        <li className="lil"><a href="https://www.instagram.com/moh1tt/" class="fa fa-instagram"> </a></li>
                        <li className="lil"><a href="#moh1tt">Moh1tt</a></li>
                    </ul>
                </nav>
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                                backgroundColor: PRIMARY_COLOR,
                                height: `${value}px`,
                            }}></div>
                    ))}
                    <br />
                    <br />
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.selectionSort()}>Selection Sort</button>
                    <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>


                </div>
            </body >





        );
    }


}
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
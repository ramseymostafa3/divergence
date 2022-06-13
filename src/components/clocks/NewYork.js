import AnalogueClock from 'react-analogue-clock';

function NewYork () {
    const clockOptions = {
        baseColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 5,
        centerColor: '#000000',
        handColors: {
            hour: '#000000',
            minute: '#000000',
            second: '#000000',
        },
        notchColor: '#000000',
        numbersColor: '#000000',
        showNumbers: false,
        size: 100,
    }
    return (
        <div className="clock-item">
            <AnalogueClock {...clockOptions} />
        </div>
    );
}

export default NewYork;
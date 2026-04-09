
import ButtonItem from "./ButtonItem";

function ButtonGrid({ onButtonClick }) {
    const buttons = Array.from({ length: 30 }, (_, i) => i + 1);

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "10px",
            marginTop: "20px"
        }}>
            {buttons.map((num) => (
                <ButtonItem
                    key={num}
                    number={num}
                    onClick={() => onButtonClick(num)}
                />
            ))}
        </div>
    );
}

export default ButtonGrid;
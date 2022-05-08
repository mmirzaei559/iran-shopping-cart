import React, {useState} from 'react';
import IProductOption from "../../interfaces/productOption";

interface Props {
    productOptions: IProductOption[],
    addDetailsBeforeAddToCard(color?: string, power?: string | number, storage?: string | number): void
}

const Options: React.FC<Props> = ({productOptions, addDetailsBeforeAddToCard}) => {

    const [specificOptions, setSpecificOptions] = useState<IProductOption[]>([])
    const [colorSelected, setColorSelected] = useState<string | undefined>('')
    const [selectedRadioBtn, setSelectedRadioBtn] = useState('')
    const [activeColor, setActiveColor] = useState('');

    const isRadioSelected = (value: number | string): boolean => selectedRadioBtn == value;

    const handelRadioClick = (key: string,value:string): void => {
        switch (key) {
            case 'power': {
                setSelectedRadioBtn(value)
                return addDetailsBeforeAddToCard(colorSelected,value,0)
            }
            case 'storage': {
                setSelectedRadioBtn(value)
                return addDetailsBeforeAddToCard(colorSelected,0, value)
            }
            default:
                return addDetailsBeforeAddToCard(colorSelected,0, 0)
        }
    }
    const colors = productOptions.map((op: IProductOption) => {
        return (typeof op.color === 'object') ? op.color[0] : op.color
    })

    const setColor = (color: string) => {
        setActiveColor(color)
        setColorSelected(color)
        setSpecificOptions(productOptions.filter(op => op.color.includes(color)))
        addDetailsBeforeAddToCard(color)
    }

    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                Colors:
                {colors?.map((color: string) => (
                    <span
                        aria-label="product color"
                        className={(activeColor === color) ? 'color-selected': ''}
                        onClick={() => setColor(color)}
                        key={color}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '100%',
                            border: '2px solid #e3e2e2',
                            cursor: 'pointer',
                            margin: '10px',
                            backgroundColor: color
                        }}>
                    </span>
                ))}
            </div>
            {specificOptions?.map((option) => (
                <div key={option.quantity}>
                    {
                        option.power ?
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                Powers:
                                {option.power?.map((pow) => (
                                    <label key={pow} style={{margin: '10px'}}>
                                        <input
                                            aria-label="power"
                                            type="radio"
                                            value={pow}
                                            checked={isRadioSelected(pow)}
                                            onChange={()=>handelRadioClick('power', pow.toString())}
                                        />
                                        {pow}
                                    </label>
                                ))
                                }
                            </div>
                            : option.storage ?
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                Storage:
                                {option.storage?.map((sto) => (
                                    <label key={sto} style={{margin: '10px'}}>
                                        <input
                                            aria-label="storage"
                                            type="radio"
                                            value={sto}
                                            checked={isRadioSelected(sto)}
                                            onChange={()=>handelRadioClick('storage', sto)}
                                        />
                                        {sto}
                                    </label>
                                ))
                                }
                            </div>
                            :
                            null
                    }

                    <div style={{display: 'flex', alignItems: 'center'}}>
                        quantity: <span style={{margin: '10px'}}>{option.quantity}</span>
                    </div>
                </div>
            ))}
            <div>

            </div>
        </div>
    )
}

export default Options
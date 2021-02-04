import { Text } from "react-native";

const customTextProps = {
  style: {
    fontSize: 28,
    fontFamily: 'rockWell',
    color: 'white'
  }
};

setCustomText = (customProps) => {
    const TextRender = Text.render
    const initialDefaultProps = Text.defaultProps
    Text.defaultProps = {
      ...initialDefaultProps,
      ...customProps
    }
    Text.render = function render(props) {
      let oldProps = props
      props = { ...props, style: [customProps.style, props.style] }
      try {
        return TextRender.apply(this, arguments)
      } finally {
        props = oldProps
      }
    }
  }
  
  const loadGlobalProps = () => {
    setCustomText(customTextProps)
  }

  export default loadGlobalProps
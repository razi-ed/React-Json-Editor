import React from "react";
import ReactJson from "react-json-view";
import PropTypes from "prop-types";

/**
 * @prop theme {String},
 * @prop src {Object},
 * @prop collapsed {Boolean | 1 | 2 },
 * @prop collapseStringsAfter {Number},
 * @prop onAdd {Fumction-> | Boolean},
 * @prop onEdit {Fumction-> | Boolean},
 * @prop onDelete {Fumction-> | Boolean},
 * @prop displayObjectSize {Number},
 * @prop enableClipboard {Boolean},
 * @prop indentWidth {Boolean},
 * @prop displayDataTypes {Boolean},
 * @prop iconStyle {String},
 * @prop style {Object}
 */
export default class ReactJsonViewAndEditor extends React.PureComponent {
  static propTypes = {
    name: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    theme: PropTypes.string,
    data: PropTypes.object.isRequired,
    collapsed: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    collapseStringsAfter: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number
    ]),
    onAdd: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    onEdit: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    onDelete: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    displayObjectSize: PropTypes.bool,
    enableClipboard: PropTypes.bool,
    indentWidth: PropTypes.number,
    displayDataTypes: PropTypes.bool,
    iconStyle: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {
    theme: "grayscale:inverted",
    data: null,
    collapsed: 1,
    collapseStringsAfter: false,
    onAdd: true,
    onEdit: true,
    onDelete: true,
    displayObjectSize: false,
    enableClipboard: true,
    indentWidth: 4,
    displayDataTypes: false,
    iconStyle: "square",
    style: {}
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  render() {
    const {
      collapseStringsAfter,
      onAdd,
      onEdit,
      onDelete,
      displayObjectSize,
      enableClipboard,
      theme,
      iconStyle,
      collapsed,
      indentWidth,
      displayDataTypes,
      style
    } = this.props;

    const { data } = this.state;

    return (
      <div className="rjv-demo">
        <ReactJson
          name={false}
          collapsed={collapsed}
          style={style}
          theme={theme}
          src={data}
          collapseStringsAfterLength={collapseStringsAfter}
          onEdit={
            onEdit
              ? e => {
                  console.log(e);
                  this.setState({ src: e.updated_src });
                }
              : false
          }
          onDelete={
            onDelete
              ? e => {
                  console.log(e);
                  this.setState({ src: e.updated_src });
                }
              : false
          }
          onAdd={
            onAdd
              ? e => {
                  console.log(e);
                  this.setState({ src: e.updated_src });
                }
              : false
          }
          displayObjectSize={displayObjectSize}
          enableClipboard={enableClipboard}
          indentWidth={indentWidth}
          displayDataTypes={displayDataTypes}
          iconStyle={iconStyle}
        />
      </div>
    );
  }
}

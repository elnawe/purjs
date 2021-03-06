function UnexpectedElement(data) {
    let err = new Error();

    // Fix error message.
    err.type = "compose.unexpected.element";
    err.message = "Trying to render unexpected element " + JSON.stringify(data.element) + "."
    err.node = data.element;

    return err;
}

module.exports = {
    UnexpectedElement: UnexpectedElement
};

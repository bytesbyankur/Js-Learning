class Printer {
    print() {
        console.log('Printing document.');
    }
}

class TextPrinter extends Printer {
    print() {
        console.log('Printing text document.');
    }
}

class ImagePrinter extends Printer {
    print() {
        console.log('Printing image file.');
    }
}

const printers = [new TextPrinter(), new ImagePrinter()];
printers.forEach((printer) => printer.print());

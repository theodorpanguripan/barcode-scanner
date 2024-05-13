import logo from './logo.svg';
import './App.css';
import { Html5QrcodeScanner} from "html5-qrcode";
import { useEffect, useState} from "react";

function App() {

  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner  = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250
      },
      fps: 5
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(e) {
      console.warn(e);
    }
  }, []);

  return (
    <div className="App">
      <h1>QR Code Scanning in React</h1>
      {
        scanResult
        ?
        <div>Success: <a href={"http://" + scanResult}>{scanResult}</a></div>
        :
        <div id="reader">Hello</div>
      }
    </div>
  );
}

export default App;

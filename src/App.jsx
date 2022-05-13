import { useState } from "react";
import "./App.css";
import "./assets/button.css";
import { Button } from "./components/Button";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Buttons</h1>
      <div>
        <span> {"<Button />"}</span>
        <Button />
        <span>{'<Button variant="outline" />'}</span>
        <Button variant="outline" />
        <span>{'<Button variant="text" />'}</span>
        <Button variant="text" />
      </div>
      <div>
        <span>{"<Button disableShadow />"}</span>
        <Button disableShadow />
      </div>
      <div className="inline">
        <div>
          <span>{'<Button startIcon="local_grocery_store" />'}</span>
          <Button startIcon="local_grocery_store" />
        </div>
        <div>
          <span>{'<Button endIcon="local_grocery_store" />'}</span>
          <Button endIcon="local_grocery_store" />
        </div>
      </div>
      <div className="inline">
        <div>
          <span>{"<Button disabled />"}</span>
          <Button disabled />
        </div>
        <div>
          <span>{'<Button variant="text" disabled />'}</span>
          <Button variant="text" disabled />
        </div>
      </div>
      <div className="inline">
        <div>
          <span>{'<Button size="sm" />'}</span>
          <Button size="sm" />
        </div>
        <div>
          <span>{'<Button size="md" />'}</span>
          <Button size="md" />
        </div>
        <div>
          <span>{'<Button size="lg" />'}</span>
          <Button size="lg" />
        </div>
      </div>
      <div className="inline">
        <div>
          <span>{'<Button color="default" />'}</span>
          <Button color="default" />
        </div>
        <div>
          <span>{'<Button color="primary" />'}</span>
          <Button color="primary" />
        </div>
        <div>
          <span>{'<Button color="secondary" />'}</span>
          <Button color="secondary" />
        </div>
        <div>
          <span>{'<Button color="danger" />'}</span>
          <Button color="danger" />
        </div>
      </div>
      <span className="createdBy">
        Created by <a href="">Firmino Massango</a> - devChallenges.io
      </span>
    </div>
  );
}

export default App;

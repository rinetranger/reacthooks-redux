import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App=(props)=> {


  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label　htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitleee" type="text"></input>
        </div>
        <div className="form-group">
          <label　htmlFor="formEventTitle">ボディー</label>
          <textarea className="form-control" id="formEventTitleee" type="text"></textarea>
        </div>
        <button className="btn btn-primary m-1">イベントを作成する</button>
        <button className="btn btn-danger m-1">全てのイベントを削除する</button>
        <button　className="btn btn-danger m-1">全ての操作ログを削除する</button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <theade>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </theade>
        <tbody>
          
        </tbody>
      </table>
    </div>
  );
}

export default App;

import React from 'react';
import { useState } from 'react';

import { Select, Input, Button } from 'antd';

const { TextArea } = Input;

const BookingForm = () => {
  const [tower, setTower] = useState('');
  const [floor, setFloor] = useState('');
  const [room, setRoom] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [comment, setComment] = useState('');
  const towerData = ['A', 'B'];
  const floorsData = [];
  const roomData = [];
  for (let i = 3; i <= 28; i++) {
    floorsData.push(i);
  }

  for (let i = 1; i <= 10; i++) {
    roomData.push(i);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      tower,
      floor,
      room,
      date,
      time,
      comment,
    };
    let json = JSON.stringify(formData);
    console.log(json);
    alert('Форма отправлена !');
    handleClear();
  };

  const handleClear = () => {
    setTower('');
    setFloor('');
    setRoom('');
    setDate('');
    setTime('');
    setComment('');
  };

  const handleTowerChange = (value) => {
    setTower(value);
  };

  const handleFloorChange = (value) => {
    setFloor(value);
  };

  const handleRoomChange = (value) => {
    setRoom(value);
  };

  const handleInputDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleInputTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleInputCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <form className="bookingform" onSubmit={handleSubmit}>
      <div className="bookingform-select__wrapper">
        <label className="bookingform__label">Выберете башню</label>
        <Select
          style={{
            width: 120,
          }}
          className="bookingform__select"
          value={tower}
          onChange={handleTowerChange}>
          <Select.Option value="">Выбрать</Select.Option>
          {towerData.map((item, index) => {
            return (
              <Select.Option key={index} value={item}>
                {item}
              </Select.Option>
            );
          })}
        </Select>
      </div>

      <div className="bookingform-select__wrapper">
        <label className="bookingform__label">Выберите этаж</label>
        <Select
          style={{ width: 120 }}
          className="bookingform__select"
          value={floor}
          onChange={handleFloorChange}>
          <Select.Option value="">Выбрать</Select.Option>
          {floorsData.map((item, index) => {
            return <Select.Option key={index} value={item}></Select.Option>;
          })}
        </Select>
      </div>

      <div className="bookingform-select__wrapper">
        <label className="bookingform__label">Выберите переговорку</label>
        <Select
          style={{ width: 120 }}
          className="bookingform__select"
          value={room}
          onChange={handleRoomChange}>
          <Select.Option value="">Выбрать</Select.Option>
          {roomData.map((item, index) => {
            return <Select.Option key={index} value={item}></Select.Option>;
          })}
        </Select>
      </div>

      <div className="bookingform-select__wrapper">
        <label className="bookingform__label">Выберите дату</label>
        <Input
          style={{ width: 120 }}
          className="bookingform__input"
          type="date"
          value={date}
          onChange={handleInputDateChange}
        />
      </div>

      <div className="bookingform-select__wrapper">
        <label className="bookingform__label">Выберите время</label>
        <Input
          style={{ width: 120 }}
          className="bookingform__input"
          type="time"
          value={time}
          onChange={handleInputTimeChange}
        />
      </div>

      <div className="bookingform-select__wrapper">
        <label className="bookingform__label">Комментарий</label>
        <TextArea
          placeholder="Введите комментарий"
          rows={4}
          value={comment}
          onChange={handleInputCommentChange}
        />
      </div>
      <div className="buttons__container">
        <Button
          style={{ color: 'white' }}
          disabled={!tower || !floor || !room || !date || !time || !comment}
          type="primary"
          onClick={handleSubmit}>
          Отправить
        </Button>

        <Button type="primary" onClick={handleClear}>
          Очистить
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;

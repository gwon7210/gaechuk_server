import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

export const createUserSeed = async (dataSource: DataSource) => {
  const userRepository = dataSource.getRepository(User);

  const users = [
    {
      phone_number: '1',
      nickname: '김교회',
      church_name: '서울교회',
      faith_confession: '하나님을 사랑합니다',
      password: await bcrypt.hash('123', 10),
    },
    {
      phone_number: '2',
      nickname: '이믿음',
      church_name: '부산교회',
      faith_confession: '예수님을 따르는 삶',
      password: await bcrypt.hash('123', 10),
    },
    {
      phone_number: '3',
      nickname: '박성경',
      church_name: '인천교회',
      faith_confession: '말씀대로 살겠습니다',
      password: await bcrypt.hash('123', 10),
    },
    {
      phone_number: '4',
      nickname: '최기도',
      church_name: '대구교회',
      faith_confession: '기도하는 삶을 살겠습니다',
      password: await bcrypt.hash('123', 10),
    },
    {
      phone_number: '5',
      nickname: '정찬양',
      church_name: '광주교회',
      faith_confession: '찬양으로 영광 돌리겠습니다',
      password: await bcrypt.hash('123', 10),
    },
    {
      phone_number: '01011112222',
      nickname: 'tester',
      church_name: 'tester 교회',
      faith_confession: 'test message',
      password: await bcrypt.hash('test123', 10),
    },
  ];

  for (const user of users) {
    const newUser = userRepository.create(user);
    await userRepository.save(newUser);
  }
}; 
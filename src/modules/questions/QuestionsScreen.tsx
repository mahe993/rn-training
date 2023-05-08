import {View, Text} from 'react-native';
import React, {useState} from 'react';

const QuestionsScreen = (): JSX.Element => {
  const [questions, _setQuestions] = useState<Array<string>>([
    'Performing batch writes in parallel?',
  ]);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Questions:</Text>
      {questions.length > 0 &&
        questions.map((q, i) => (
          <Text
            key={i}
            style={{
              padding: 20,
              color: 'black',
              marginBottom: 10,
              textAlign: 'auto',
            }}>
            {q}
          </Text>
        ))}
    </View>
  );
};

export default QuestionsScreen;

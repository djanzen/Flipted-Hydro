import { gql } from '@apollo/client';

export const GET_ALL_COURSES = gql`
  {
    courses {
      id  
      name
    }
  }
`;

export const ADD_COURSE = gql`
  mutation AddCourse($name: String!){
    addCourse(
      name: $name
    ){
      name
    }
  }
`;

export const DELETE_COURSE = gql`
  mutation DeleteCourse($id: String!){
    deleteCourse(
      id: $id
    )
  }
`;

export const GET_TASK = gql`
  query getTask($id: String!){
    task(taskId: $id){
      id
      name
      instructions
      points
      startAt
      endAt
      dueDate
      parentMissionId
      parentMissionIndex
      objectiveId
      pages {
        skippable
        blocks {
          title
          ... on ImageBlock {
            imageUrl
          }
          ... on TextBlock {
            contents
            fontSize
          }
          ... on VideoBlock {
            videoUrl
          }
          ... on QuizBlock{
            blockId
            questions{
              ... on FrQuestion{
                id
                description
              }
              ... on McQuestion {
                id
                description
                points
                options {
                  description
                }
              }
            }
          }        
        }
      }
      requirements {
        id 
        description
        isComplete
      }
    },
    retrieveQuestionProgress(taskId: $id){
      answers{
        questionId
        pointsAwarded
        answer
      }
    }
  }
`;

export const GET_MISSION = gql`
  query getMission($id: String!){
    mission(missionId: $id) {
      id
      course
      name
      description
      missionContent{
        ... on Task{
          id
          name
          instructions
          points
          dueDate
          parentMissionId
          parentMissionIndex
          requirements{
            id
            description
          }
        }
        ... on SubMission{
          id
          name
          description
        }
      }
    }
  }
`;

export const SAVE_MCQUESTION = gql`
  mutation saveMCQuestion($taskId: String!, $blockId: String!, $questionId: String!, $answerId: Int!) {
    saveMultipleChoiceProgress(mcBlockInput: {
      taskId: $taskId
      questionBlockId: $blockId
      questionId: $questionId
      answerId: $answerId
    })
  }
`;

export const SAVE_FRQUESTION = gql`
  mutation saveFRQuestion($taskId: String!, $blockId: String!, $questionId: String!, $answer: String!){
    saveFreeResponseProgress(frBlockInput: {
      taskId: $taskId
      questionBlockId: $blockId
      questionId: $questionId
      answer: $answer
    })
  }
`;
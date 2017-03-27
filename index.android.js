/**
 * SkoreCeeper React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Button,
  View
} from 'react-native';

function ScoreHeader(props) {
    return (
      <View style={styles.totals}>
        <Text>Enter Player Names before inputing scores</Text>
      </View>
    );
}

class PlayerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange() {
    this.props.onUserInput(
      this.playernameInput.value,
      this.playercountersInput.value,
      this.playerpointsInput.value,
      this.props.id
    );
  }
  
  render() {
    return (
      <View style={styles.totals}>
      <View>
        <TextInput
          type="text"
          defaultValue={this.props.playername}
          value={this.props.playername}
          ref={(input) => this.playernameInput = input}
          onChange={this.handleChange}
          />
      </View>
      <View>
        <TextInput
          type="number"
          defaultValue={this.props.playercounters}
          value={this.props.playercounters}
          ref={(input) => this.playercountersInput = input}
          onChange={this.handleChange}
          />
      </View>
      <View>
        <TextInput
          type="number"
          defaultValue={this.props.playerpoints}
          value={this.props.playerpoints}
          ref={(input) => this.playerpointsInput = input}
          onChange={this.handleChange}
          />
      </View>
      </View>
    );
  }
}

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1name: "Player 1",
      player1points: "Player 1 Points",
      player1counters: "Player 1 Counters",
      player2name: "Player 2",
      player2points: "Player 2 Points",
      player2counters: "Player 2 Counters",
      player3name: "Player 3",
      player3points: "Player 3 Points",
      player3counters: "Player 3 Counters",
      player4name: "Player 4",
      player4points: "Player 4 Points",
      player4counters: "Player 4 Counters"
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.initScore = this.initScore.bind(this);
  }
  handleUserInput(playername,playercounters,playerpoints,id) {
    switch(id) {
      case "1":
        this.setState({
          player1name: playername,
          player1counters: playercounters,
          player1points: playerpoints
        });
        break;
      case "2":
        this.setState({
          player2name: playername,
          player2counters: playercounters,
          player2points: playerpoints
        });
        break;
      case "3":
        this.setState({
          player3name: playername,
          player3counters: playercounters,
          player3points: playerpoints
        });
        break;
      case "4":
        this.setState({
          player4name: playername,
          player4counters: playercounters,
          player4points: playerpoints
        });
        break;
      default:
        break;
    }
  }
  initScore(gamename) {
    switch(gamename) {
      case "Magic the Gathering":
        this.setState({
          player1points: "20",
          player2points: "20",
          player3points: "20",
          player4points: "20",
          player1counters: "0",
          player2counters: "0",
          player3counters: "0",
          player4counters: "0"
        });
        break;
      case "Yugioh":
        this.setState({
          player1points: "8000",
          player2points: "8000",
          player3points: "8000",
          player4points: "8000",
          player1counters: "0",
          player2counters: "0",
          player3counters: "0",
          player4counters: "0"
        });
        break;
      case "Monopoly":
        this.setState({
          player1points: "1500",
          player2points: "1500",
          player3points: "1500",
          player4points: "1500",
          player1counters: "0",
          player2counters: "0",
          player3counters: "0",
          player4counters: "0"
        });
        break;
      case "Start at Zero":
        this.setState({
          player1points: "0",
          player2points: "0",
          player3points: "0",
          player4points: "0",
          player1counters: "0",
          player2counters: "0",
          player3counters: "0",
          player4counters: "0"
        });
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <View>
        <GameList 
          onUpdate={this.initScore} 
          />
        <View className="w3-green">
        <ScoreHeader />
        </View>
        <PlayerInfo 
          id="1"
          playername={this.state.player1name}
          playerpoints={this.state.player1points}
          playercounters={this.state.player1counters}
          onUserInput={this.handleUserInput}
        />
        <PlayerInfo 
          id="2"
          playername={this.state.player2name}
          playerpoints={this.state.player2points}
          playercounters={this.state.player2counters}
          onUserInput={this.handleUserInput}
        />
        <PlayerInfo 
          id="3"
          playername={this.state.player3name}
          playerpoints={this.state.player3points}
          playercounters={this.state.player3counters}
          onUserInput={this.handleUserInput}
        />
        <PlayerInfo 
          id="4"
          playername={this.state.player4name}
          playerpoints={this.state.player4points}
          playercounters={this.state.player4counters}
          onUserInput={this.handleUserInput}
        />
      </View>
    );
  }
}

class GameButton extends React.Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress() {
    this.props.onPress(
      this.props.gamename
    );
  }
  render() {
    return (
      <View>
        <Button 
          title={this.props.gamename}
          className="w3-btn w3-ripple"
          onPress={this.handlePress}
          >
          {this.props.gamename}
        </Button>
      </View>
    );
  }
}

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(gamename) {
    this.props.onUpdate(gamename);
  }
  render() {
    return (
    <View>
    <Text style={styles.totals}>
      Choose Game:
    </Text>
    <View className="w3-blue w3-padding">
      <GameButton 
        gamename="Magic the Gathering"
        onPress={this.handlePress}
        />
      <GameButton 
        gamename="Yugioh" 
        onPress={this.handlePress}
        />
      <GameButton 
        gamename="Monopoly" 
        onPress={this.handlePress}
        />
      <GameButton 
        gamename="Start at Zero" 
        onPress={this.handlePress}
        />
    </View>
    </View>
    );
  }
}

export default class SkoreCeeper extends Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Score />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  totals: {
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('SkoreCeeper', () => SkoreCeeper);

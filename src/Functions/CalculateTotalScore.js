export default function CalculateTotalScore(player) {
  const totalScore = player.scores.reduce((acc, score) => acc + score, 0);
  return (player.totalScore = totalScore);
}

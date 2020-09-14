import urllib.request
from pydub import AudioSegment
from pydub.playback import play
from pydub.generators import Sine

notes=["https://tinyurl.com/wx9amev" ]
piano=["https://tinyurl.com/yx3k5kw5"]
for newnote in notes:
    for newpiano in piano:
        urllib.request.urlretrieve(newpiano, "piano.wav")
        beat = AudioSegment.from_wav("piano.wav")
        urllib.request.urlretrieve(newnote, "beat.wav")
        loop = AudioSegment.from_wav("beat.wav")
        filtered = beat.low_pass_filter(3000)
        loop = loop.reverse().pan(-0.5).overlay(loop.pan(0.5))
        final = filtered.overlay(loop-3, loop=True)
        play(final)
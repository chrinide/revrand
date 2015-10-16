"""
The :mod:`pyalacarte.optimize` module provides a standardized interface to
popular optimization libraries and tools, such as NLopt and ``scipy.optimize``,
and also supports custom optimization methods.
"""

from .sgd import sgd
from .base import (minimize, minimize_bounded_start,
                   candidate_start_points_grid, candidate_start_points_random)

__all__ = [
    'sgd',
    'minimize',
    'minimize_bounded_start',
    'candidate_start_points_grid',
    'candidate_start_points_random',
]
